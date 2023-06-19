import { FloatButton, Layout } from "antd";
import { Outlet } from "react-router-dom";
import useBreakpoint from "use-breakpoint";
import AppFooter from "../footer/AppFooter";
// import HomeBanner from "../home-banner/HomeBanner";
import SideBar from "../sider/SideBar";
import MobileMenu from "../ui/mobileMenu/MobileMenu";
// CSS
import "../../styles/SideBar.css";
import "./App.css";

const { Footer, Sider, Content } = Layout;

const BREAKPOINTS = { mobile: 0, tablet: 1024 };

const App = () => {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "tablet");
	return (
		<Layout>
			{breakpoint === "tablet" && (
				<Sider style={{ borderRight: "2px solid #000" }} className='side-bar'>
					<div style={{ position: "sticky", top: 0 }}>
						<SideBar />
					</div>
				</Sider>
			)}
			<Layout>
				<div
					style={{
						minHeight: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}>
					<Content style={{ background: "#101010", padding: "0px 35px" }}>
						<div style={{ paddingTop: 50 }}>
							{breakpoint === "mobile" && <MobileMenu />}
							<Outlet />
						</div>
            <FloatButton.BackTop visibilityHeight={600} />
					</Content>
					<Footer style={{ background: "#222", padding: "0px 35px" }}>
						<AppFooter />
					</Footer>
				</div>
			</Layout>
		</Layout>
	);
};

export default App;
