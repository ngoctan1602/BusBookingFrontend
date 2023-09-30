import Footer from "../Components/Footer";
import Header from "../Components/Header";

import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className="container">
                {children}
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;