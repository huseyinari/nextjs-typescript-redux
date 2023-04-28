import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"
// components
import Alert from "@/src/components/display/Alert"
import Button, { ButtonType } from "@/src/components/forms/Button"
import Input from "@/src/components/forms/Input"
import InputGroup from "@/src/components/forms/InputGroup"
import InputGroupText from "@/src/components/forms/InputGroupText"
import TextArea from "@/src/components/forms/TextArea"
import Container from "@/src/components/layouts/Container"
// services
import { getPost } from "@/src/services/PostService"
// models
import Post from "@/src/models/Post"
// redux
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks"
import { clear, editPost, getPostState } from "@/src/redux/post-store"

interface IEditPost {
    post: Post
}

const EditPost: NextPage<IEditPost> = ({ post }) => {
    const [title, setTitle] = useState<string>(post.title);
    const [body, setBody] = useState<string>(post.body);

    const { updateSuccess } = useAppSelector(getPostState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(clear());
        }
    }, [])
    return (
        <>
            <Head>
                <title>Gönderi Düzenle</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Alert show={updateSuccess} text="Gönderi başarıyla güncellendi." />
                <InputGroup type="mb-3">
                    <InputGroupText text="Başlık"/>
                    <Input placeholder="Başlık" value={title} onChange={(val: string) => setTitle(val)} />
                </InputGroup>
                <InputGroup type="mb-3">
                    <InputGroupText text="Açıklama" />
                    <TextArea placeholder="Açıklama" value={body} onChange={(val: string) => setBody(val)} />
                </InputGroup>
                <Button 
                    text="Güncelle" 
                    type={ButtonType.SUCCESS} 
                    onClick={() => {
                        post.title = title;
                        post.body = body;
                        dispatch(editPost(post));
                    }} 
                />
            </Container>
        </>
    )
}
export default EditPost;

export const getServerSideProps: GetServerSideProps<IEditPost> = async (context) => {
    const params = context.params as any;
    
    const post = await getPost(params.id);

    return {
        props: {
            post: JSON.parse(JSON.stringify(post))
        }
    }
}