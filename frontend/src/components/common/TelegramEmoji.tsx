function emojiToCodepoint(emoji: string): string {
  return [...emoji].map((c) => c.codePointAt(0)?.toString(16)).join("-");
}

function TelegramEmoji({ emoji, size = 24 }: { emoji: string; size?: number }) {
  const codepoint = emojiToCodepoint(emoji);
  const src = `/assets/images/emoji/${codepoint}.png`;

  return (
    <img
      src={src}
      alt={emoji}
      width={size}
      height={size}
      style={{ verticalAlign: "middle" }}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}

export default TelegramEmoji;
