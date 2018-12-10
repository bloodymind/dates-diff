import React from 'react'

import { PageTemplate, Header, Footer, DateSample1 } from 'components'

const SamplePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <DateSample1 />
    </PageTemplate>
  )
}

export default SamplePage
