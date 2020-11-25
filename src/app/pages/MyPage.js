import React from 'react';
import { useSubheader } from "../../_metronic/layout";
import {
  Card,
  CardBody,
} from "../../_metronic/_partials/controls";

export const MyPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("My Custom title");

  return (
    <Card>
      <CardBody>

        <p>Hello World!</p>
      </CardBody>
    </Card>
  );
};
