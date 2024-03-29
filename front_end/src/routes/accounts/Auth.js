import { React, useEffect } from "react";
import styled from "styled-components";
import { kakaoLogin } from "../../api/AuthApi";
import { useSetRecoilState } from "recoil";
import { isLoginState, userInfoState } from "../../atoms/atoms";
import { useNavigate } from "react-router-dom";
import { Alert } from "components/commons/Alert";
import { setApiHeaders } from "api/Axios";

const Container = styled.div`
  min-height: 100vh;
`;

const Auth = () => {
  // 인가코드 받기
  const loginCode = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  //atom 혹은 selector가 업데이트되면 리렌더링. 구독하는 값을 변경하는 set 함수만 반환. 불필요한 리렌더링 방지.
  const setIsLoginState = useSetRecoilState(isLoginState);
  const setUserInfoState = useSetRecoilState(userInfoState);

  useEffect(() => {
    async function fetchData() {
      await kakaoLogin(loginCode)
        .then((res) => {
          if (res) {
            setIsLoginState(true);
            setUserInfoState(res.user.member_seq);
            setApiHeaders();
            if (res.user.isSurvey === false) {
              navigate("/survey");
            } else {
              navigate("/recommend");
            }
          } else {
            Alert("✅ Please check your information.");
            navigate("/");
          }
        })
        .catch((err) => {
          Alert("✅ Please check your information.");
          navigate("/");
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <Container></Container>
    </>
  );
};

export default Auth;