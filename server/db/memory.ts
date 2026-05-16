export const accounts = [
  {
    id: '9a3f6e98-7007-4c13-9afa-ed780eece1ae',
    name: 'Assets',
    parent_id: null,
    balance: 9200,
  },
  {
    id: '3c8d332f-0a5c-4e3c-93bc-3d58248c5b6e',
    name: 'Cash',
    parent_id: '9a3f6e98-7007-4c13-9afa-ed780eece1ae',
    balance: 1200,
  },
  {
    id: '00929cfc-67d2-4539-940a-69c70c53fb68',
    name: 'Checking',
    parent_id: '3c8d332f-0a5c-4e3c-93bc-3d58248c5b6e',
    balance: 1200,
  },
  {
    id: '70515f35-1ad4-4459-afe5-6be8261008ca',
    name: 'Savings',
    parent_id: '9a3f6e98-7007-4c13-9afa-ed780eece1ae',
    balance: 5000,
  },
  {
    id: 'acfb6913-a253-4fbc-be56-a527ce69aa1f',
    name: 'Bank',
    parent_id: '9a3f6e98-7007-4c13-9afa-ed780eece1ae',
    balance: 3000,
  },
  {
    id: '323a400a-499f-4426-b615-a8118223449b',
    name: 'Business Account',
    parent_id: 'acfb6913-a253-4fbc-be56-a527ce69aa1f',
    balance: 3000,
  },
  {
    id: '6312b2f8-1ddf-4e99-b591-4d1f3a261380',
    name: 'Expenses',
    parent_id: null,
    balance: -570,
  },
  {
    id: 'ab91ec13-23ab-4ed8-9add-12e8731da037',
    name: 'Food',
    parent_id: '6312b2f8-1ddf-4e99-b591-4d1f3a261380',
    balance: -450,
  },
  {
    id: 'aa88c69f-c51f-4a82-b4c8-83147fe39ba5',
    name: 'Transport',
    parent_id: '6312b2f8-1ddf-4e99-b591-4d1f3a261380',
    balance: -120,
  },
]
