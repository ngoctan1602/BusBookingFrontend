import classNames from 'classnames/bind';
import stlyes from './Header.module.scss';
import logo from '~/asset/image/logotrip.png'

const cx = classNames.bind(stlyes);

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('content')}>
            <div className={cx('logo')}>
                <img src={logo} alt='logo'>
                </img>
            </div>

            <div className={cx('navbar')}>
                <button className={cx('button')}>
                    Trang chủ
                </button>
                <button className={cx('button')}>
                    Liên hệ
                </button>
                <button className={cx('button')}>
                    Ưu đãi
                </button>
                <button className={cx('button')}>
                    Về chúng tôi
                </button>
                <button className={cx('login')}>
                    Đăng nhập
                </button>
            </div>
        </div>


    </header>

}

export default Header;