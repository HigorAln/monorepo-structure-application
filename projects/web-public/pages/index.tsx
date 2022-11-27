import React from "react";
import { sum } from "@alura/utils/math/sum";
import { Text } from "@alura/design-system/components/Text";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Main>
      <Text tag="p">Monorepo - Design system - is Running</Text>
      <Text tag="p">
        Monorepo - Utils - is running if result = 4 // 2 + 2 ={" "}
        <span style={{ color: "red" }}>{sum(2, 2)}</span>
      </Text>
      <Text tag="p">Setup - Test - Lint - TS - all running</Text>
      <Text tag="p">✅✅✅✅</Text>
    </Main>
  );
}
