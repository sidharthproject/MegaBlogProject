import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({name,control,label,defaultValue=""}) {
  return (
   <div>
    {label &&  <label className='inline-block mb-1 pl-1'>{label}</label>}
    
   <Controller
   name={name || "content"}
   control={control}
   render={({field:{onChange}})=>(
    <Editor
    intialValue ='default value'
    init={
       {
        intialValue: defaultValue,
        height:500,
        menubar:true,
        plugins: [
         
                'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
                'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
                'media', 'table', 'emoticons', 'template', 'help'
              
          ],
        tollbar:
        'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help' ,
        content_style:"body {fony-family:Helvetica,Arial,san-serif; font-size:14px}"
   
       }
    }
onEditorChange={onChange}
    />
   )}

   />

   </div>

  )
}

