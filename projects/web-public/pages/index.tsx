import React from "react";
import { sum } from "@alura/utils/math/sum";
import { Text } from "@alura/design-system/components/Text";

export default function Home() {
  return (
    <main>
      <Text tag="h1">Home soma de 2 + 2 = {sum(2, 2)}</Text>
    </main>
  );
}
