from .models import Recipe, Ingredient, Keyword, Allergy, Category, Review
from rest_framework import serializers

class IngredientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredient
        fields = '__all__'

class KeywordSerializer(serializers.ModelSerializer):

    class Meta:
        model = Keyword
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'

class RecipeSerializer(serializers.ModelSerializer):

    class KeywordSerializer(serializers.ModelSerializer):

        class Meta:
            model = Keyword
            fields = ('keyword_name',)

    class IngredientSerializer(serializers.ModelSerializer):

        class Meta:
            model = Ingredient
            fields = ('ingredient_name',)
    
    class CategorySerializer(serializers.ModelSerializer):

        class Meta:
            model = Category
            fields = ('category_name',)

    keywords = KeywordSerializer(many = True,)
    ingredients = IngredientSerializer(many = True)
    categories = CategorySerializer(many=True)

    class Meta:
        model = Recipe
        fields = '__all__'

class ReviewListSerializer(serializers.ModelSerializer):

    member_nickname = serializers.CharField(source='member.nickname')
    profile_image_url = serializers.CharField(source='member.profile_image_url')
    recipe_seq = serializers.IntegerField(source='recipe.recipe_seq')
    class Meta:
        model = Review
        fields = ('id', 'member_nickname', 'content', 'image_url', 'ratings', 'create_date', 'last_modified_date', 'profile_image_url', 'recipe_seq')

class ReviewSerializer(serializers.ModelSerializer):

    class RecipeSerializer(serializers.ModelSerializer):

        class Meta:
            model = Recipe
            fields = ('recipe_seq', 'name',)
            read_only_field=('recipe_seq')

    member = serializers.CharField(source='member.nickname', read_only=True)
    recipe = RecipeSerializer(read_only=True)

    class Meta:
        model = Review
        # fields = '__all__'
        fields = ('id','member', 'recipe', 'content', 'image_url', 'ratings', 'create_date', 'last_modified_date')

class RecipeListSerializer(serializers.ModelSerializer):
    # ReviewSerializer ????????? ??????
    # Review?????? ratings count ??????
    
    class KeywordSerializer(serializers.ModelSerializer):

        class Meta:
            model = Keyword
            fields = ('keyword_name',)
    keywords = KeywordSerializer(many=True)
    ratings = ReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Recipe
        # ?????? ???????????? rating field ??????
        fields = ('recipe_seq', 'name', 'calories', 'images', 'keywords', 'ratings')

