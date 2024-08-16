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



export function App() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-zinc-100">
      <div className="w-full max-w-2xl bg-white shadow rounded-md p-8">
        <h1 className="text-2xl font-bold text-center">REGISTRATION</h1>
        <form className="flex gap-6 flex-col mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>First name</Label>
              <Input />
            </div>
            <div>
              <Label>Last name</Label>
              <Input />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Email address</Label>
              <Input />
            </div>
            <div>
              <Label>Company</Label>
              <Input />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label>Date of birth</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Date of birth</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Date of birth</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
