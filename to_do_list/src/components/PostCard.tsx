import Card from 'react-bootstrap/Card';

type Post = {
    id: number,
    title: string
}

type PostCardProps = {
    post: Post
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <Card key={post.id}>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
            </Card.Body>
        </Card>
        
    )
}