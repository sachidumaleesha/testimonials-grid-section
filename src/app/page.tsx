import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-[#ecf2f8] flex justify-center items-center lg:h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 max-w-[1400px] w-full m-10 text-white'>

        {/* Item 01 */}
        <div className='lg:col-span-6 bg-[#7541c8] rounded-xl p-10 flex flex-col gap-5 relative'>
          <div className='flex items-center gap-4'>
            <Image src='/images/image-daniel.jpg' alt='daniel' width={40} height={40} className='rounded-full border-2 border-purple-400'/>
            <div>
              <p className='font-semibold'>Daniel Clifford</p>
              <p className='text-sm'>Verified Graduate</p>
            </div>
          </div>
          <p className='text-xl font-semibold z-10'>
            I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every pennys worth.
          </p>
          <p className='text-sm text-slate-300'>
            I was an EMT for many years before I joined the bootcamp. Ive been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, Ive successfully switched careers, working as a Software Engineer at a VR startup.
          </p>
          <Image src='/images/bg-pattern-quotation.svg' alt='bg-pattern-quotation' width={140} height={140} className='absolute top-0 right-10 md:right-28 z-[0]'/>
        </div>
        
        {/* Item 02 */}
        <div className='lg:col-span-3 bg-[#48556a] rounded-xl p-10 flex flex-col gap-5'>
          <div className='flex items-center gap-4'>
            <Image src='/images/image-jonathan.jpg' alt='jonathan' width={40} height={40} className='rounded-full border-2 border-slate-400'/>
            <div>
              <p className='font-semibold'>Jonathan Walters</p>
              <p className='text-sm'>Verified Graduate</p>
            </div>
          </div>
          <p className='text-xl font-semibold'>
            The team was very supportive and kept me motivated</p>
          <p className='text-sm text-slate-300'>
            I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments Ive made in myself.</p>
        </div>

        {/* Item 03 */}
        <div className='lg:col-span-3 lg:row-span-2 bg-[#cfcfcf] text-black rounded-xl p-10 flex flex-col gap-5'>
          <div className='flex items-center gap-4'>
            <Image src='/images/image-kira.jpg' alt='kira' width={40} height={40} className='rounded-full border-2 border-gray-400'/>
            <div>
              <p className='font-semibold'>Kira Whittle</p>
              <p className='text-sm'>Verified Graduate</p>
            </div>
          </div>
          <p className='text-xl font-semibold'>
            Such a life-changing experience. Highly recommended!
          </p>
          <p className='text-sm text-gray-900'>
            Before joining the bootcamp, Ive never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, Ive often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!
          </p>
        </div>

        {/* Item 04 */}
        <div className='lg:col-span-3 bg-white text-black rounded-xl p-10 flex flex-col gap-5'>
          <div className='flex items-center gap-4'>
            <Image src='/images/image-jeanette.jpg' alt='jeanette' width={40} height={40} className='rounded-full border-2 border-gray-400'/>
            <div>
              <p className='font-semibold'>Jeanette Harmon</p>
              <p className='text-sm'>Verified Graduate</p>
            </div>
          </div>
          <p className='text-xl font-semibold'>
            An overall wonderful and rewarding experience
          </p>
          <p className='text-sm text-gray-900'>
            Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.
          </p>
        </div>

        {/* Item 05 */}
        <div className='lg:col-span-6 bg-[#19212e] text-white rounded-xl p-10 flex flex-col gap-5'>
          <div className='flex items-center gap-4'>
            <Image src='/images/image-patrick.jpg' alt='patrick' width={40} height={40} className='rounded-full border-2 border-purple-400'/>
            <div>
              <p className='font-semibold'>Patrick Abrams</p>
              <p className='text-sm'>Verified Graduate</p>
            </div>
          </div>
          <p className='text-xl font-semibold'>
            Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and earning from their experiences was easy.</p>
          <p className='text-sm'>
            The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.
          </p>
        </div>
      </div>
    </main>
  )
}
