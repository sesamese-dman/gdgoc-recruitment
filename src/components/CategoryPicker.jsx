import StatusMessage from './StatusMessage'

function CategorySkeleton() {
  return (
    <div className="space-y-4" aria-busy="true" aria-label="Loading topics">
      {[0, 1, 2, 3].map((item) => (
        <div key={item} className="h-[5.5rem] animate-pulse rounded-2xl bg-surface" />
      ))}
    </div>
  )
}

function CategoryPicker({ categories, loading, error, selectedId, onSelect }) {
  return (
    <fieldset className="min-w-0">
      <legend className="text-[1.75rem] font-medium leading-tight text-ink">
        What brings you here?
      </legend>
      <p className="mt-3 text-base text-muted">
        Pick the closest topic in the form. We’ll take it from there.
      </p>

      <div className="mt-6">
        {loading && <CategorySkeleton />}

        {error && (
          <StatusMessage role="alert">
            We couldn’t load the topics right now. Please try again later.
          </StatusMessage>
        )}

        {!loading && !error && categories.length === 0 && (
          <StatusMessage>No topics are available right now.</StatusMessage>
        )}

        {!loading && !error && categories.length > 0 && (
          <div className="space-y-4">
            {categories.map((category) => {
              const isSelected = category.id === selectedId

              return (
                <label
                  key={category.id}
                  className={`flex cursor-pointer gap-4 rounded-2xl border p-6 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent ${
                    isSelected
                      ? 'border-brand-tint bg-brand-tint'
                      : 'border-line bg-white hover:border-accent'
                  }`}
                >
                  <input
                    type="radio"
                    name="inquiry-category"
                    value={category.id}
                    checked={isSelected}
                    onChange={() => onSelect(category.id)}
                    className="sr-only"
                  />
                  <span className="w-5 shrink-0 text-lg font-medium text-brand" aria-hidden="true">
                    {category.icon}
                  </span>
                  <span>
                    <span className="block font-medium text-ink">{category.label}</span>
                    <span className="mt-1 block text-sm text-muted">{category.description}</span>
                  </span>
                </label>
              )
            })}
          </div>
        )}
      </div>
    </fieldset>
  )
}

export default CategoryPicker