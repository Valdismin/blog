import Post from "@/src/app/post/Post";
import {RecentPosts} from "@/src/app/recent-posts";

export default function Feed() {

    return (
        <div className={'flex flex-row'}>
            <div className={'mt-10'}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
            <RecentPosts/>
        </div>
    )
}