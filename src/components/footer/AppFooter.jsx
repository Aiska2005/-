import React from "react";
import useBreakpoint from "use-breakpoint";

import "../../styles/Footer.css";

const BREAKPOINTS = { mobile: 0, tablet: 768 };

const AppFooter = () => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "tablet");

  const flex = { display: "flex", justifyContent: "space-between" };

  return (
    <div className="content-footer">
      <div className="footer__list">
        <ul
          className={breakpoint === "mobile" ? "list__info-mb" : "list__info"}
        >
          <li>Ресторан доставки еды</li>
          <li>Криваносова 15 а</li>
          <li className="tel">
            <a href="tel:+996703043428">0703043428</a>
          </li>
          <li className="tel">
            <a href="tel:+996555629591">0555629591</a>
          </li>
        </ul>
      </div>
      <div style={flex} className="end-footer">
        <h5>Copyright © {new Date().getFullYear()}</h5>
        <h5>Develop By Nuraisa</h5>
      </div>
    </div>
  );
};

export default AppFooter;
