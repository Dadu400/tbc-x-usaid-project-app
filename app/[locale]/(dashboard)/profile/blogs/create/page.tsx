import AddEditBlogForm from "../../../../../../components/blogs/AddEditBlogForm";
import ProfilePageLayout from "../../../../../../components/profile/ProfilePageLayout";

function AddEditBlog() {
    return (
        <ProfilePageLayout component={<AddEditBlogForm blog={{ id: "", title: "", text: "" }} />} selectedMenuItem="blogs" />
    )
}

export default AddEditBlog;