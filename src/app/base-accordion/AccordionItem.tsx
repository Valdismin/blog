'use client'

import clsx from 'clsx';
import {ReactNode, useState} from 'react';
import Link from "next/link";
import Image from "next/image";

interface Details {
    detailTitle: string;
    link: string;
}

interface Props {
    details: Details[];
    isDefaultExpanded?: boolean;
    summary: ReactNode;
    iconLink: string
}

export const AccordionItem = ({
                                  details,
                                  isDefaultExpanded = false,
                                  summary,
                                  iconLink
                              }: Props) => {
    const [isExpanded, setIsExpanded] = useState(isDefaultExpanded);
    return (
        <div>
            <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className={clsx(
                    'flex w-full items-center overflow-hidden px-3 py-2.5 gap-2',
                )}
            >
                <Image width={20} height={20} src={iconLink} alt={'icon image'} />
                <span className="text-base text-[#646464] gap-0 group-focus:!text-white">{summary}</span>
                <div className="relative ml-auto">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <svg className={clsx(
                            isExpanded ? 'rotate-180' : '',
                        )} fill="#a1a1aa" height="10px" width="10px" version="1.1" id="Layer_1"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 407.437 407.437">
                            <polygon
                                points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
                        </svg>
                    </div>
                </div>
            </button>

            <div className={'pl-3'}>
                {isExpanded && details.map((item, index) => {
                    return (
                        <Link href={item.link}
                            className={'w-full flex items-center text-base leading-6 text-[#646464] mb-1 px-3 py-1.5 rounded-lg hover:bg-n3 cursor-pointer'}
                            key={index}>{item.detailTitle}</Link>
                    )
                })}
            </div>
            <div>
            </div>
        </div>
    );
};
