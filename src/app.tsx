import "./styles/global.css"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./components/ui/button"



export function App() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-zinc-100">
      <div className="w-full max-w-2xl bg-white shadow rounded-md p-8">
        <h1 className="text-2xl font-bold text-center">REGISTRATION</h1>
        <form className="flex gap-6 flex-col mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>First name</Label>
              <Input type="text" />
            </div>
            <div>
              <Label>Last name</Label>
              <Input type="text" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Email address</Label>
              <Input type="email" />
            </div>
            <div>
              <Label>Company</Label>
              <Input type="text" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 items-end">
            <div>
              <Label>Date of birth</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {Array(12).fill(1).map((_,index)=>{
                    const value = String(index+1).padStart(2,"0");
                    return(
                      <SelectItem id={String(index)} value={value}>{value}</SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  {Array(31).fill(1).map((_,index)=>{
                    const value = String(index+1).padStart(2,"0");
                    return(
                      <SelectItem id={String(index)} value={value}>{value}</SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array(150).fill(1).map((_,index)=>{
                    const value = String(index+1901).padStart(4,"0");
                    return(
                      <SelectItem id={String(index)} value={value}>{value}</SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="mt-2" type="submit">REGISTER</Button>
        </form>
      </div>
    </div>
  )
}
