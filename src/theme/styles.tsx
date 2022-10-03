export const styles = {
  global: () => ({
    html: {
      fontSize: {
        base: "70%",
        md: "100%",
      },
    },
    body: {
      bgColor: "bg-body",
      transitionProperty: "background, background-color, color",
      transitionDuration: "1s",
    },
    "::selection": {
      background: "white",
      color: "black",
    },
  }),
};
