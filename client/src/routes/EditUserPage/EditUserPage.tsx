import UploadWidget from '../../components/uploadWidget'

const EditUserPage = () => {
  return (
    <div className='h-screen-minus-nav flex items-center justify-center'>
      
      <UploadWidget uwConfig={{
        cloudName: "damiano",
        uploadPreset: "yamaha",
        multiple: false,
        maxImageFileSize: 20000000,
        folder: "avatars"
      }}/>
    </div>
  )
}
export default EditUserPage