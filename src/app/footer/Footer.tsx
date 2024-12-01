export const Footer = () => {

    return (
        <footer className="w-full border-t border-gray-400 2sm:py-[20px] py-[15px] fixed bottom-0">
            <div className="max-w-[750px] mx-auto px-4 w-full flex justify-between"><p
                className="sm:text-base text-sm text-gray-800 2sm:pb-0 pb-2">© Copyright 2024 - Glowist. All Rights
                Reserved.</p><p className="sm:text-base text-sm text-gray-800 flex items-center gap-0.5"><a
                className="pe-1 hover:underline hover:text-gray-900" href="/privacy-policy">Privacy</a><span>-</span><a
                className="ps-1 hover:underline hover:text-gray-900" href="/terms-of-use">Terms</a></p></div>
        </footer>
    )
}