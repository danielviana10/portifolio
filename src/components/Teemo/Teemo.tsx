const SvgRenderer = ({ svg }: { svg: SvgItem }) => (
    <div
      key={svg.id}
      style={{
        position: "absolute",
        top: `${svg.top}px`,
        left: `${svg.left}px`,
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
      }}
    >
      <Image
        src="/teemo-emoji.svg"
        alt="Teemo emoji"
        width={100}
        height={100}
      />
    </div>
  );