export const desktopNav = {
    navClass:'hidden lg:flex space-x-8',
    relativeGroup:'relative group',
    thbt:'text-textColor hover:text-btnColor transition',
    thbc:'text-textColor hover:text-btnColor  cursor-pointer',
    absoluteClass:'absolute left-0 mt-2 w-40 bg-backgroundColor border border-gray-500 px-2 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300',
    hoverClass:'p-2 hover:bg-gray-700 rounded',
    textHover:'block text-textColor hover:text-btnColor',
}

export const mobileNav = {
    navClass:'absolute w-[100%] left-0 top-[50px] bg-backgroundColor flex flex-col h-[100vh]',
    relativeGroup:'relative group mt-2 px-4 sm:px-6 py-2 w-[100%] ',
    thbt:'text-textColor hover:text-btnColor  transition ',
    thbc:'text-textColor hover:text-btnColor   inline-block cursor-pointer ',
    absoluteClass:' left-10 mt-2 hidden h-[0px] group-hover:inline-block group-hover:h-auto  w-[100%] bg-backgroundColor border border-gray-500 px-2 py-2  rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300',
    hoverClass:'p-2 hover:bg-gray-700 rounded',
    textHover:'block text-textColor hover:text-btnColor',
}

