export default function Item() {
    return (
        <div className="w-[36rem] h-[24rem] relative">
            <div
                className="w-[36rem] h-[24rem] bg-[#6c63ff] bg-opacity-15 border-[#6c63ff] border-opacity-50 border-1
                          backdrop-blur-md shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]
                          rounded-2xl absolute top-0 "
            ></div>
            <div
                className="w-[36rem] h-[60px] rounded-t-2xl absolute -bottom-[62px]
                bg-[#6c63ff] bg-opacity-15 border-[#6c63ff] border-opacity-50 border-1
                backdrop-blur-md shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#6c63ff,0_0_15px_#6c63ff,0_0_30px_#6c63ff]
                bg-gradient-to-b from-[#6c63ff] to-transparent
            "
            ></div>
        </div>
    );
}
