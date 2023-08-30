import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-2 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-2 gap-x-2 lg:ml-0  sm:ml-3 sm:gap-x-3">
            <p className="font-bold text-xs sm:text-sm lg:text-xl">HOME</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
