import Header from "@/components/orderflow/header";
import TopMenu from "@/components/orderflow/top-menu";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import CategoryListTab from "@/components/orderflow/category-list-tab";
import {SummaryCard} from "@/components/orderflow/summary-card";

export default function Home() {
    return (
        <>
            <Header/>
            <Tabs defaultValue="dine" className="w-full">
                <TopMenu/>
                <TabsContent value="dine">
                    <CategoryListTab/>
                </TabsContent>
                <TabsContent value="shop"></TabsContent>
                <TabsContent value="ordering"></TabsContent>
            </Tabs>
            <div>
                <div className="h-20 w-full"></div>
                <div className="fixed bottom-0 w-full">
                    <SummaryCard/>
                </div>
            </div>
        </>
    )
}
