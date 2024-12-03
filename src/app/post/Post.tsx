import Image from 'next/image';
import avatar from '@/public/images/avatar.png';

export default function Post () {

    return (
        <div className={'gap-3 flex flex-col max-w-[50%] mx-auto'}>
            <div className={'flex items-center'}>
                <Image src={avatar} alt={'avatar'} className={'rounded-[100%] mr-2'} width={32} height={32}/>
                <span className={'mr-2'}>Marcelo Santana</span>
                <span>3 month ago</span>
            </div>
            <h3 className={'relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 no-underline hover:opacity-80 active:opacity-disabled transition-opacity font-matter text-gray-900 hover:text-gray-800 font-semibold sm:text-xl 2sm:text-lg text-base'}>Post
                title</h3>
            <p className={'line-clamp-2 font-matter 2sm:text-base text-sm text-gray-800 mb-1'}>India celebrated a
                historic victory in the 2024 World Cup, triumphing with exceptional skill and resilience. Led by their
                captain's inspiring leadership, the team showcased dominance throughout the tournament, captivating fans
                worldwide.</p>
            <hr className="shrink-0 bg-n3 border-none w-full h-[1px] mb-4" role="separator"/>
        </div>
    )
}