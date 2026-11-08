import ContactIntro from '../components/ContactIntro'
import ContactWorkspace from '../components/ContactWorkspace'
import BeforeYouSend from '../components/BeforeYouSend'

function ContactPage() {
  return (
    <main>
      <ContactIntro />
      <ContactWorkspace />
      <BeforeYouSend />
    </main>
  )
}

export default ContactPage