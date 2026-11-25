import { RightOutlined } from "@ant-design/icons";
import { Avatar, Button, Collapse, Typography } from "antd";
import { map } from "lodash-es";

const { Text } = Typography;

const defaultRenderAnswer = (item) =>
  item.answer ? (
    <Text className="text-gray-600">{item.answer}</Text>
  ) : (
    <Text type="secondary">No answer yet.</Text>
  );

// "Expand all" / "Collapse all" for a FaqList, to place wherever the caller
// wants it (e.g. a tab bar). Renders nothing for fewer than two items.
export const FaqExpandAll = ({ items, activeKeys, onActiveKeysChange }) => {
  if (items.length < 2) return null;
  const allOpen = items.every((item) => activeKeys.includes(item.key));
  return (
    <Button
      type="link"
      size="small"
      className="px-0"
      onClick={() =>
        onActiveKeysChange(allOpen ? [] : items.map((item) => item.key))
      }
    >
      {allOpen ? "Collapse all" : "Expand all"}
    </Button>
  );
};

// A numbered accordion of questions on antd Collapse, each question its own
// rounded panel. `items` is [{ key, question, answer }]; which ones are open
// is controlled by the caller (`activeKeys` + `onActiveKeysChange`), so
// FaqExpandAll can share the state. `renderAnswer` renders an open item's
// answer - plain text by default. `forceRender` keeps closed answers in the
// DOM, e.g. so search engines can read a public FAQ.
const FaqList = ({
  items,
  activeKeys,
  onActiveKeysChange,
  renderAnswer = defaultRenderAnswer,
  forceRender = false,
}) => (
  <Collapse
    bordered={false}
    expandIconPlacement="end"
    activeKey={activeKeys}
    onChange={(keys) => onActiveKeysChange(map([].concat(keys), String))}
    expandIcon={({ isActive }) => (
      <RightOutlined
        rotate={isActive ? 90 : 0}
        className="text-xs! text-gray-400!"
      />
    )}
    className="flex flex-col gap-2 bg-transparent!"
    items={map(items, (item, index) => ({
      key: String(item.key),
      label: (
        <span className="flex items-center gap-3">
          <Avatar
            size={24}
            className="shrink-0 bg-white! border! border-gray-200! text-gray-500! text-[11px]! font-semibold"
          >
            {index + 1}
          </Avatar>
          <Text strong className="text-sm text-gray-800">
            {item.question}
          </Text>
        </span>
      ),
      children: renderAnswer(item),
      forceRender,
      className:
        "rounded-xl! border! border-gray-200/80! bg-gray-50/70 overflow-hidden",
      styles: {
        header: { alignItems: "center", padding: "14px 16px" },
        body: { padding: "0 16px 16px 52px" },
      },
    }))}
  />
);

export default FaqList;
