import { redirect } from "next/navigation";
import Header from "./Component/Header";


export default function Home() {
    redirect('Pages/About')
}
