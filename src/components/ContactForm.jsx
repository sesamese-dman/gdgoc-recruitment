import { useState } from 'react'
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const emptyValues = {
  firstName: '',
  lastName: '',
  email: '',
  organization: '',
  subject: '',
  message: '',
  consent: false,
}

const inputClass =
  'w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30'

function validate(values, categoryId) {
  const errors = {}
  if (!values.firstName.trim()) errors.firstName = 'Please enter your first name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'That email doesn’t look right.'
  if (!categoryId) errors.category = 'Please choose a topic.'
  if (!values.subject.trim()) errors.subject = 'Please add a short subject.'
  if (!values.message.trim()) errors.message = 'Please write your message.'
  if (!values.consent) errors.consent = 'Please agree so we can respond to you.'
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-google-red">
          {error}
        </p>
      )}
    </div>
  )
}

function ContactForm({ categories, loading, selectedId, onSelect }) {
  const [values, setValues] = useLocalStorage('gdgoc-contact-draft', emptyValues)
  const [sentName, setSentName] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const found = validate(values, selectedId)
    setErrors(found)
    if (Object.keys(found).length === 0) {
      setSentName(values.firstName)
      setValues(emptyValues)
      setSubmitted(true)
    }
  }

  function reset() {
    setErrors({})
    setSubmitted(false)
  }

  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
    className: `${inputClass} ${errors[name] ? 'border-google-red' : 'border-line'}`,
  })

  if (submitted) {
    return (
      <div className="rounded-[1.25rem] bg-surface p-8" role="status">
        <h2 className="text-[1.75rem] font-medium text-ink">Thank you, {sentName}!</h2>
        <p className="mt-3 text-muted">
          Your message is ready. This demo has no server, so nothing was actually sent.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white hover:opacity-90"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-[1.25rem] bg-surface p-8">
      <div className="flex items-start justify-between">
        <h2 className="text-[1.75rem] font-medium leading-tight text-ink">Send us a message</h2>
        <ArrowUpRight className="size-5 text-brand" aria-hidden="true" />
      </div>
      <p className="mt-3 text-xs text-muted">Fields marked * are required.</p>

      <div className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="firstName" label="First name *" error={errors.firstName}>
            <input {...fieldProps('firstName')} placeholder="Your first name" />
          </Field>
          <Field id="lastName" label="Last name">
            <input {...fieldProps('lastName')} placeholder="Your last name" />
          </Field>
        </div>

        <Field id="email" label="Email address *" error={errors.email}>
          <input {...fieldProps('email')} type="email" placeholder="Where we can reply to you" />
        </Field>

        <Field id="organization" label="University / organization">
          <input {...fieldProps('organization')} placeholder="Where you study or work (optional)" />
        </Field>

        <Field id="category" label="Inquiry category *" error={errors.category}>
          <div className="relative">
            <select
              id="category"
              value={selectedId ?? ''}
              onChange={(event) => onSelect(event.target.value)}
              disabled={loading || categories.length === 0}
              aria-invalid={errors.category ? true : undefined}
              aria-describedby={errors.category ? 'category-error' : undefined}
              className={`${inputClass} appearance-none pr-10 ${
                errors.category ? 'border-google-red' : 'border-line'
              }`}
            >
              {loading && <option value="">Loading topics…</option>}
              {!loading && categories.length === 0 && <option value="">No topics available</option>}
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-brand"
              aria-hidden="true"
            />
          </div>
        </Field>

        <Field id="subject" label="Subject *" error={errors.subject}>
          <input {...fieldProps('subject')} placeholder="A short introduction to your question" />
        </Field>

        <Field id="message" label="Your message *" error={errors.message}>
          <textarea
            {...fieldProps('message')}
            rows={6}
            placeholder="Tell us a little about your question or idea…"
            className={`${fieldProps('message').className} resize-y`}
          />
        </Field>

        <div>
          <label className="flex items-start gap-3 text-xs text-muted">
            <input
              type="checkbox"
              name="consent"
              checked={values.consent}
              onChange={handleChange}
              aria-invalid={errors.consent ? true : undefined}
              className="mt-0.5 size-4 shrink-0 accent-brand"
            />
            I agree that the information I share can be used to respond to this inquiry.
          </label>
          {errors.consent && <p className="mt-1.5 text-sm text-google-red">{errors.consent}</p>}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Send message
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
        <p className="max-w-[14rem] text-xs text-muted">
          Please don’t include passwords or sensitive personal information.
        </p>
      </div>
    </form>
  )
}

export default ContactForm