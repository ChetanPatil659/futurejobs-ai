import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, theme } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Home from "./Home";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            fontFamily: "var(--font-sans)",
            colorPrimary: "#0022F6",
            colorInfo: "#0022F6",
            colorTextBase: "#212229",
            colorText: "#212229",
            colorTextSecondary: "#525252",
            colorBorder: "#e5e5e5",
            colorBorderSecondary: "#f5f5f5",
            colorTextTertiary: "#737373",
            colorTextQuaternary: "#a3a3a3",
            colorBgContainer: "#ffffff",
            colorBgLayout: "#fafafa",
            colorPrimaryBg: "#e6f0ff",
            borderRadius: 8,
            borderRadiusXS: 4,
            borderRadiusSM: 6,
            borderRadiusLG: 10,
            controlHeight: 32,
            controlHeightSM: 28,
            controlHeightLG: 36,
            fontSizeSM: 13,
            lineHeight: 1.5,
            padding: 16,
            paddingSM: 12,
            paddingLG: 24,
            margin: 16,
            marginSM: 12,
            marginLG: 24,
          },
          components: {
            Table: { cellPaddingBlock: 12 },
            Button: {
              fontWeight: 500,
              paddingInline: 12,
              contentFontSize: 14,
              contentFontSizeSM: 13,
              borderRadius: 6,
              borderRadiusSM: 6,
              borderRadiusLG: 6,
            },
          },
        }}
      >
        <Home />
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>,
);
