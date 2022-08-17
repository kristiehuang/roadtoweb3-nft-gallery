import Image from "next/image"

export const NftCard = ({ nft }) => {

  return (
    <div className="w-1/4 flex flex-col ">
      <div className="rounded-md">
        <Image className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} alt={nft.title} ></Image>
      </div>
      <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
          <div className="">
            <a href={`https://etherscan.io/token/${nft.contract.address}`}>
              <h2 className="text-xl text-gray-800">{nft.title}</h2>
            </a>
          </div>
          <div className="flex-grow mt-2">
            <p className="text-gray-600">{nft.description}</p>
          </div>
      </div>
    </div>
  )
}
