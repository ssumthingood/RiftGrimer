import { cls } from "@libs/client/utils";
import useResize from "@libs/hooks/useResize";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const size = useResize();
    return <div>{children}</div>;
}
