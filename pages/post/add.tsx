import { NextPage } from "next";
import { useEffect, useState } from "react";
// components
import Input from "@/src/components/forms/Input";
import InputGroup from "@/src/components/forms/InputGroup";
import Container from "@/src/components/layouts/Container";
import InputGroupText from "@/src/components/forms/InputGroupText";
import TextArea from "@/src/components/forms/TextArea";
import Button, { ButtonType } from "@/src/components/forms/Button";
import Alert from "@/src/components/display/Alert";
// redux
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { addPost, clearSuccess, getPostState } from "@/src/redux/post-store";
// models
import Post from "@/src/models/Post";


interface IAddPost {

}

const AddPost: NextPage<IAddPost> = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useAppDispatch();
    const { saveSuccess } = useAppSelector(getPostState);

    useEffect(() => {
        return () => {
            dispatch(clearSuccess());
        }
    }, [])

    return (
        <Container>
            <Alert show={saveSuccess} text="Gönderi başarıyla kaydedildi." />
            <InputGroup type="mb-3">
                <InputGroupText text="Başlık"/>
                <Input placeholder="Başlık" value={title} onChange={(val: string) => setTitle(val)} />
            </InputGroup>
            <InputGroup type="mb-3">
                <InputGroupText text="Açıklama" />
                <TextArea placeholder="Açıklama" value={body} onChange={(val: string) => setBody(val)} />
            </InputGroup>
            <Button text="Kaydet" type={ButtonType.SUCCESS} onClick={() => dispatch(addPost(new Post(101, title, body)))} />
        </Container>
    )
}
export default AddPost;