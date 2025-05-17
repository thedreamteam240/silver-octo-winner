import FootNav from "@/components/editor/FootNav";
import HeadNav from "@/components/editor/HeadNav";

export default function Test(){
    return (
        <div className="flex flex-col gap-2">
            <HeadNav />
            <FootNav />
        </div>
    )
}