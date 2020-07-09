import Link from 'next/link';
import {useContext} from "react";
import ThemeContext from "./../../context/ThemeContext";

const SiteBranding = () => {
const { settings } = useContext(ThemeContext);

  return (
    <div className="logo">
        { settings && (
            <Link href={ settings.url || '/' } prefetch={false}>
                <a target={"_blank"}>{ settings.name || 'Lorem Ipsum' }</a>
            </Link>
        )}
    </div>
  );
};

export default SiteBranding;