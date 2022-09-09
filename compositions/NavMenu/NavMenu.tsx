import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Separator from "@radix-ui/react-separator";
import Link from "next/link";
import {
  BehanceIcon,
  FacebookIcon,
  PinterestIcon,
  SearchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@components/Icons";
import Logo from "@components/Logo";
import styles from "./NavMenu.module.css";

type Props = {};

const NavMenu = (props: Props) => {
  return (
    <NavigationMenu.Root orientation="horizontal">
      <NavigationMenu.List className={styles["navmenu__list"]}>
        <NavigationMenu.Item>
          <Link href="/" passHref>
            <NavigationMenu.Link>
              <Logo />
            </NavigationMenu.Link>
          </Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.List className={styles["navmenu__links"]}>
            <NavigationMenu.Item>
              <Link href="/" passHref>
                <NavigationMenu.Link>Home</NavigationMenu.Link>
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="/" passHref>
                <NavigationMenu.Link>About</NavigationMenu.Link>
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="/" passHref>
                <NavigationMenu.Link>Articles</NavigationMenu.Link>
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="/" passHref>
                <NavigationMenu.Link>Contact Us</NavigationMenu.Link>
              </Link>
            </NavigationMenu.Item>
            <Separator.Root
              orientation="vertical"
              className={styles["separator"]}
            />

            <NavigationMenu.Item>
              <Link href="/" passHref>
                <NavigationMenu.Link aria-label="facebook">
                  <FacebookIcon />
                </NavigationMenu.Link>
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="/" passHref>
                <NavigationMenu.Link aria-label="twitter">
                  <TwitterIcon />
                </NavigationMenu.Link>
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="/" passHref>
                <NavigationMenu.Link aria-label="youtube">
                  <YoutubeIcon />
                </NavigationMenu.Link>
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="/" passHref>
                <NavigationMenu.Link aria-label="pinterest">
                  <PinterestIcon />
                </NavigationMenu.Link>
              </Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <Link href="/" passHref>
                <NavigationMenu.Link aria-label="behance">
                  <BehanceIcon />
                </NavigationMenu.Link>
              </Link>
            </NavigationMenu.Item>
            <Separator.Root
              orientation="vertical"
              className={styles["separator"]}
            />

            <NavigationMenu.Item>
              <Link href="/" passHref>
                <NavigationMenu.Link aria-label="Search">
                  <SearchIcon />
                </NavigationMenu.Link>
              </Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default NavMenu;
