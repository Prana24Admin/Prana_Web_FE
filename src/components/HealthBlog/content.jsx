import React from "react";
const HealthyBlogContent = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <h3 className="main-title">FAQs</h3>
          <h4
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "var(--neutralBlack)",
            }}
          >
            What are some common health and hygiene products for women?
          </h4>
          <p style={{ fontSize: "0.9rem" }}>
            Common women’s care products include lotions, pads, pantyliners, and
            tampons, which also help preserve menstrual hygiene. It is
            recommended for women to use pads and tampons produced from natural
            absorbent fibres, such as cotton as they are absorbent and yet not
            harsh on the skin or the environment.
          </p>
        </div>
        <div>
          <h4
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "var(--neutralBlack)",
            }}
          >
            Do women’s multivitamins have any side effects?
          </h4>
          <p style={{ fontSize: "0.9rem" }}>
            Common side-effects of multivitamins may include constipation,
            diarrhoea, and stomach distress. The side-effects are usually
            transient and should go away as your body adjusts to the drug. If
            the symptoms persist or worsen, you should speak to a medical
            professional.
          </p>
        </div>
        <div>
          <h4
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "var(--neutralBlack)",
            }}
          >
            Which feminine hygiene product is best?
          </h4>
          <p style={{ fontSize: "0.9rem" }}>
            Deciding which feminine hygiene product is best is a deeply personal
            choice. Each product has its own advantages. Sanitary pads, which
            have been sold around the world for decades are easily accessible,
            but not always environmentally-friendly, and can be uncomfortable to
            wear. Tampons take some time to get used to, and some people may
            find them unsanitary in comparison with pads. Menstrual cups are
            hygienic if used correctly, and are a great way to reduce
            environmental waste. However, fears around how to use the product
            may prevent women from adopting it.
          </p>
        </div>
      </div>
    </>
  );
};
export default HealthyBlogContent;
