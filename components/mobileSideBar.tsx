import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import {Menu} from "lucide-react"
import {Sidebar} from "@/components/sidebar"

export const MobileSideBar=()=>{
    return (
        <Sheet>
            <SheetTrigger>
            <Menu/>
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side="left">
                <Sidebar/>
            </SheetContent>
        </Sheet>
    )
}