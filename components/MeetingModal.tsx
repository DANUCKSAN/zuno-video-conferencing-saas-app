import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const MeetingModal = () => {
  return (
   <Dialog>
    
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
       
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
           
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
        </div>
        
      </DialogContent>
    </Dialog>
   
  )
}

export default MeetingModal
