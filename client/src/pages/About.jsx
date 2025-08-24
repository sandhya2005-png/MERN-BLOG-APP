import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Our Educational Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to our Educational Blog! This platform was created as a
              space to share knowledge, insights, and resources with learners
              around the world. We are passionate about education and believe
              that learning should be accessible to everyone.
            </p>

            <p>
              On this blog, you&apos;ll find weekly articles and tutorials on
              topics such as web development, software engineering, programming
              languages, and other educational subjects. We are constantly
              exploring new ideas and technologies, so be sure to check back
              often for fresh content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people&apos;s comments and reply
              to them as well. We believe that a community of learners can help
              each other grow and improve through collaboration and discussion.
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
