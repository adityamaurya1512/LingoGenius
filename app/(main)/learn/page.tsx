 import { StickyWrapper } from "@/components/sticky-wrapper"
 import {FeedWrapper} from "@/components/feed-wrapper"
 import {Header} from "./header"
import { Userprogress } from "@/components/user-progress"
import {
   getUserProgress,
   getUnits,
   getCourseProgress ,
   getLessonPercentage,
   getUserSubscription} from "@/db/queries"
import { redirect } from "next/navigation"
import Loading from "./loading"
import {Unit} from "./unit"
 const LearnPage=async ()=>{
  const userProgressData=getUserProgress();
  const courseProgressData=getCourseProgress();
  const lessonPercentageData=getLessonPercentage()
  const unitsData=getUnits()
  const userSubscriptionData= getUserSubscription()
  const [userProgress,units,courseProgress,lessonPercentage,userSubscription] = await Promise.all([
    userProgressData,
    unitsData,
    courseProgressData,
    lessonPercentageData,userSubscriptionData]
  )
   console.log(lessonPercentage,'hdddjddh')
   if(!userProgress || !userProgress.activeCourse)
   {
    redirect("/courses")
   }
   if(!courseProgress)
   {
    redirect("/courses");
   }
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
          <StickyWrapper>
           <Userprogress activeCourse={userProgress.activeCourse} hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={!!userSubscription?.isActive}/>
          </StickyWrapper>
          <FeedWrapper>
           <Header title={userProgress.activeCourse.title}/>
           {units?.map((unit)=>(
            <div key={unit.id} className="mb-10">
             <Unit id={unit.id}
             order={unit.order}
             description={unit.description}
             title={unit.title}
             lessons={unit.lessons}
             activeLesson={courseProgress.activeLesson}
             activeLessonPercentage={lessonPercentage}

             />
            </div>
           ))}
          </FeedWrapper>
        </div>
    )
}
export default LearnPage