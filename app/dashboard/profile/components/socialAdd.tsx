"use client"
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, X } from "lucide-react";
import { useState } from "react";
import { SocialInterfaceProps } from "../types";
import { toast } from "sonner";
import { removeSocial, updateSocial } from "@/app/actions/user.actions";

export default function SocialAdd({ handleClose }: SocialInterfaceProps) {
    const [social, setSocial] = useState("")
    const [link, setLink] = useState("")
    const [loading, setLoading] = useState(false)

    const handleAdd = async () => {
        if (!social || !link) {
            toast.error("Please fill all fields")
            return
        }

        try {
            const result = await updateSocial(social, link)
            setLoading(true)

            if (result.success) {
                toast.success("Social added successfully")
                handleClose()
            } else {
                toast.error(result.error || "Failed to add social")
            }
        } catch (error) {
            toast.error(`Failed to add social ${error}`)
        }
    }

    const handleRemove = async () => {
        if (!social) {
            toast.error("Select platform you want to remove")
        }

        try {
            const result = await removeSocial(social)

            setLoading(true)

            if (result.success) {
                toast.success("Social removed successfully")
                handleClose()
            } else {
                toast.error(result.error || "Failed to remove social")
            }
        } catch (error) {
            toast.error(`Failed to remove ${error}`)
        }
    }

    return (
        <div className="pb-5">
            <div className="flex justify-between items-center">
                <h1 className="text-sm font-bold">Add Social Details</h1>
                <Button className="bg-transparent" onClick={handleClose}><X className="w-4 h-4" /></Button>
            </div>
            <div className="mt-3">
                <Select onValueChange={(value) => { setSocial(value) }}>
                    <SelectTrigger className="w-full border border-purple-700">
                        <SelectValue placeholder="Select a social" />
                        <SelectContent className="bg-gray-600">
                            <SelectItem value="facebook">Facebook</SelectItem>
                            <SelectItem value="twitter">Twitter</SelectItem>
                            <SelectItem value="instagram">Instagram</SelectItem>
                            <SelectItem value="youtube">Youtube</SelectItem>
                            <SelectItem value="audiomack">Audiomack</SelectItem>
                            <SelectItem value="boomplay">Boomplay</SelectItem>
                            <SelectItem value="applemusic">Apple Music</SelectItem>
                            <SelectItem value="spotify">Spotify</SelectItem>
                            <SelectItem value="tiktok">Tiktok</SelectItem>
                        </SelectContent>
                    </SelectTrigger>

                </Select>
                <input className="mt-3 border border-purple-700 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-700" type="text" placeholder="https://www.example.com/username" onChange={(e) => setLink(e.target.value)} />

                <div className="mt-3 flex justify-center">
                    <Button className="bg-purple-900/10 text-purple-900" onClick={handleAdd}>{loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Add"}</Button>
                    <Button className="bg-transparent" onClick={handleRemove}>{loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Remove"}</Button>
                </div>
            </div>
        </div>
    )
}