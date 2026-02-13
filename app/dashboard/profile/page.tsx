"use client";

import { useEffect, useState } from "react";
import { UserProfile } from "@/app/types/user.types";
import { getUserDetails } from "@/app/actions/user.actions";
import Image from "next/image";
import { Mail, PencilLineIcon } from "lucide-react";
import SocialAdd from "./components/socialAdd";
import { Button } from "@/components/ui/button";

export default function Profile() {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [socialhandles, setSocialhandle] = useState<{ name: string, link: string }[]>([])
    const [showSocialAdd, setShowSocialAdd] = useState(false)

    const handleSocialAdd = () => {
        setShowSocialAdd(true)

    }

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true)
            const user = await getUserDetails()
            setUser(user)
            setLoading(false)
            setSocialhandle([
                {
                    name: "Facebook",
                    link: user?.facebook || ""
                },
                {
                    name: "Audiomack",
                    link: user?.audiomack || ""
                },
                {
                    name: "Apple Music",
                    link: user?.applemusic || ""
                },
                {
                    name: "Boomplay",
                    link: user?.boomplay || ""
                },
                {
                    name: "Spotify",
                    link: user?.spotify || ""
                },
                {
                    name: "Tiktok",
                    link: user?.tiktok || ""
                },
                {
                    name: "Instagram",
                    link: user?.instagram || ""
                },
                {
                    name: "Youtube",
                    link: user?.youtube || ""
                }
            ].filter((socialhandle) => socialhandle.link !== ""))
        }
        fetchUser();
    }, [])
    return (
        <div className={"px-2 pt-5 min-h-screen pb-5 overflow-y-auto"}>
            {/* Name, image etc */}
            <div className="flex items-center gap-3 flex-col md:flex-row">
                <div className="flex">
                    {user?.picture ? (
                        <Image src={user?.picture} width={100} height={100} alt="" />
                    ) : (
                        <div className="rounded-full bg-gray-700/10 font-bold text-white text-5xl border w-24 h-24 flex items-center justify-center border-purple-700">{user?.name.split(" ")[0].charAt(0).toUpperCase()}{user?.name.split(" ")[1].charAt(0).toUpperCase()}</div>
                    )}
                    <Button className="relative top-18 right-7 bg-purple-900 hover:bg-purple-900/20 hover:text-gray-400 rounded-full w-6 h-6"><PencilLineIcon className="w-5 h-5 text-gray-300" /></Button>
                </div>
                <div className="flex items-center justify-center md:items-start md:justify-stat">

                    {/* TODO: Add location and country */}
                    <div className="flex-col flex">
                        <h1 className="text-white text-2xl font-bold mt-3">{user?.name}</h1>
                        <div className="flex gap-2">
                            <p className="text-gray-400 text-xs">{user?.username}username</p>
                            <p className="text-gray-400 text-xs">{user?.role}</p>
                        </div>
                        <p className="text-gray-400 text-xs">{user?.location}{user?.country ? `, ${user?.country}` : ""}country</p>
                        {user?.role === "musician" ? <p className="text-gray-400 text-xs">{user?.genre} Jazz</p> : null}
                    </div>

                    <div >
                        <Button className="bg-transparent relative top-[-30px] md:top-0 right-3 hover:bg-transparent hover:text-gray-400"><PencilLineIcon className="w-5 h-5 text-gray-500" /></Button>
                    </div>

                </div>

            </div>

            {/* About */}
            <div className="flex flex-col">
                <h1 className="text-white text-md mt-3">About</h1>
                <p className="text-gray-400 text-xs mt-2">{user?.bio}about</p>
            </div>

            {/* Contact */}
            <div className="flex flex-col mt-2 bg-gray-400/10 rounded-sm p-2 px-5 pb-5">
                <h1 className="text-white text-md mt-3">Contact Information</h1>
                {/* Email */}
                <div className="flex bg-gray-400/10 rounded-sm p-2 mt-5 justify-start items-center gap-2">
                    <Mail className="bg-purple-800/10 text-purple-900 w-fit h-fit rounded-sm p-2" />
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-xs">Email</p>
                        <p className="text-gray-400 text-xs">{user?.email}</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex bg-gray-400/10 rounded-sm p-2 mt-5 justify-start items-center gap-2">
                    <Mail className="bg-purple-800/10 text-purple-900 w-fit h-fit rounded-sm p-2" />
                    <div className="flex flex-col">
                        <p className="text-gray-400 text-xs">Phone</p>
                        <p className="text-gray-400 text-xs">{user?.contact}+2359378746449498</p>
                    </div>
                </div>

                {/* Social handles */}
                <div className="flex flex-col mt-2">
                    <div className=" flex justify-between items-center">
                        <h1 className="text-white text-md mt-3">Social handles</h1>
                        <Button onClick={handleSocialAdd} className="text-gray-400 text-xs mt-2 bg-transparent"><PencilLineIcon size={15} /></Button>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6">
                        {socialhandles.map((socialhandle, index) => (
                            <div className="flex" key={index} hidden={socialhandle.link === null}>
                                <a href={socialhandle.link} target="_blank" className="text-gray-400 text-xs mt-2 bg-purple-900/30 rounded-full w-fit p-2">{socialhandle.name}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Instrument */}
            <div className="flex flex-col mt-2">
                <h1 className="text-white text-md mt-3">Instrument</h1>
                <p className="text-gray-400 text-xs mt-2 bg-purple-900/30 rounded-full w-fit p-2">{user?.instruments}bass guitar</p>
            </div>

            {/* Collaborations */}
            <div className="flex flex-col mt-2">
                <h1 className="text-white text-md mt-3">Collaborations</h1>
                <p className="text-gray-400 text-xs mt-2 bg-purple-900/30 rounded-full w-fit p-2">{user?.collaborations}collaborations</p>
            </div>

            {/* Awards */}
            <div className="flex flex-col mt-2">
                <h1 className="text-white text-md mt-3">Awards</h1>
                <p className="text-gray-400 text-xs mt-2 bg-purple-900/30 rounded-full w-fit p-2">{user?.awards}awards</p>
            </div>

            {/* Subcription */}
            <div className="flex flex-col mt-2">
                <h1 className="text-white text-md mt-3">Subscription</h1>
                <p className="text-gray-400 text-xs mt-2 bg-purple-900/30 rounded-full w-fit p-2">{user?.creditBalance}</p>
                <p className="text-gray-400 text-xs mt-2 bg-purple-900/30 rounded-full w-fit p-2">{user?.subscriptionType}subscription</p>
                <p className="text-gray-400 text-xs mt-2 bg-purple-900/30 rounded-full w-fit p-2">{user?.subscriptionStatus}subscription</p>
                <p className="text-gray-400 text-xs mt-2 bg-purple-900/30 rounded-full w-fit p-2">{user?.subscriptionExpiresAt?.toDateString() || ""}Subscription expires at</p>
            </div>


            {/* Adding or Editing Box */}
            <div className="text-white z-50 absolute top-50 md:top-1/2 md:left-1/2 transform md:-translate-x-1/5 md:-translate-y-1/2 bg-gray-800 w-76 md:w-96 h-fit px-2 rounded-md backdrop-blur-sm">
                {/* Show Profile Add */}
                {/* Show Social Add */}
                {showSocialAdd ? <SocialAdd handleClose={() => setShowSocialAdd(false)} /> : null}
            </div>

        </div>
    )
}