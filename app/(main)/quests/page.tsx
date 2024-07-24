import { Userprogress } from "@/components/user-progress"
import { StickyWrapper } from "@/components/sticky-wrapper"
import {  getUserProgress } from "@/db/queries"
import { redirect } from "next/navigation"
import { FeedWrapper } from "@/components/feed-wrapper"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

import { getUserSubscription } from "@/db/queries"

const quests=[
  {
    title:"Earn 20 XP",
    value:20,
  },
  {
    title:"Earn 50 XP",
    value:50,
  },
  {
    title:"Earn 100 XP",
    value:100,
  },
  {
    title:"Earn 500 XP",
    value:500,
  },
  {
    title:"Earn 500 XP",
    value:500,
  },
  {
    title:"Earn 1000 XP",
    value:1000,
  },
]
 const QuestPage =async()=>{
    const userSubscriptionData=getUserSubscription()
     const userProgressData=getUserProgress()
     
    const [userProgress,userSubscription]=await Promise.all([userProgressData,userSubscriptionData,])
   if(!userProgress || !userProgress.activeCourse)
   {
    redirect("/courses");
   }

    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
         <StickyWrapper>
           <Userprogress
           activeCourse={userProgress.activeCourse}
           hearts={userProgress.hearts}
           points={userProgress.points}
           hasActiveSubscription={!!userSubscription?.isActive}
           /> 
         </StickyWrapper>
         <FeedWrapper >
            <div className="w-full flex flex-col items-center">
            <Image src="/quests.svg" alt="LeaderBoard" height={90} width={90}/>
            <h1 className="text-center font-bold text-neutral-800 text-2xl text-muted-foreground my-6">
              Quests
            </h1>
            <p className="text-muted-foreground ext-center text-lg mb-6">Complete quests by earning points.</p>
              <ul className="w-full">
               {quests.map((quest)=>{
                const progress=(userProgress.points/quest.value)*100
                console.log(progress)
               return(
                <div key={quest.title} className="flex items-center w-full p-4 gap-x-4 border-t-2 ">
                <Image src="/points.svg" alt="points" width={60} height={60}/>
                <div className="flex flex-col gap-y-2 w-full">
                  <p className="text-neutral-700 text-xl font-bold">{quest.title}</p>
                  <Progress value={progress} className="h-3" />

                </div>
                </div>
               )
               })}
              </ul>
            </div>

         </FeedWrapper>
        </div>
    )
}

export default QuestPage