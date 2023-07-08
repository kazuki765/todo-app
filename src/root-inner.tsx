// @refresh reload
import { Routes } from "@solidjs/router";
import { Suspense, useContext } from "solid-js";
import {
  Body,
  FileRoutes,
  Head,
  Html,
  Meta,
  Scripts,
  Title,
} from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
import "./index.css";
import { ThemeContext } from "./context/Theme";

export default function Root() {
  const theme = useContext(ThemeContext);
  return (
    <Html lang="en" data-color-mode={theme.mode}>
      <Head>
        <Title>TODO APP</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
