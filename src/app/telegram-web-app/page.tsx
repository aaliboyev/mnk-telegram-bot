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
                <TopMenu />
                <TabsContent value="dine">
                    <CategoryListTab/>
                </TabsContent>
                <TabsContent value="shop"></TabsContent>
                <TabsContent value="ordering"></TabsContent>
            </Tabs>
            <SummaryCard/>
        </>
    )
}
