import {
  ArrowForward,
  CampaignRounded,
  ShoppingBagRounded,
} from '@mui/icons-material';
import { Button, Divider, MenuItem, TextField } from '@mui/material';
import Link from 'next/link';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function Info() {
  return (
    <div className="mx-auto mt-[16px] w-[1000px]">
      <div className="flex justify-between">
        <div className="text-[24px] text-[#000000DE]">New Campaign</div>
        <Link href="/campaign/create?type=1">
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForward />}
            // disabled
          >
            Select content
          </Button>
        </Link>
      </div>
      <div
        className="my-[16px] flex flex-col gap-[24px] rounded-xl p-[24px]"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.60)' }}
      >
        <div>
          <div className="mr-[8px] inline-block rounded-full bg-[#5042F41F] p-[4px]">
            <CampaignRounded className="text-[#5042F4]" />
          </div>
          <span className="text-[16px] font-medium text-[#000000DE]">
            Campaign Info
          </span>
        </div>
        <div>
          <div className="mb-[8px] font-medium text-[#000000DE]">
            Campaign name <span className="text-[#D32F2F]">*</span>
          </div>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder={'Name your campaign, e.g., "Spring Launch"'}
          />
        </div>
        <div className="flex gap-[20px]">
          <div className="flex-1">
            <div className="mb-[8px] font-medium text-[#000000DE]">
              Campaign style & tone
            </div>
            <TextField
              fullWidth
              select
              defaultValue="EUR"
              variant="outlined"
              size="small"
              placeholder="Choose your campaign tone"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="flex-1">
            <div className="mb-[8px] font-medium text-[#000000DE]">
              Influencer list
            </div>
            <TextField
              fullWidth
              select
              defaultValue="EUR"
              variant="outlined"
              size="small"
              placeholder="Select your influencer list"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
              <Divider orientation="horizontal" />
              <Button fullWidth variant="text" sx={{ justifyContent: 'left' }}>
                + CREATE A NEW LIST
              </Button>
            </TextField>
          </div>
        </div>
      </div>

      <div
        className="my-[16px] flex flex-col gap-[24px] rounded-xl p-[24px]"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.60)' }}
      >
        <div>
          <div className="mr-[8px] inline-block rounded-full bg-[#5042F41F] p-[4px]">
            <ShoppingBagRounded className="text-[#5042F4]" />
          </div>
          <span className="text-[16px] font-medium text-[#000000DE]">
            Product Info
          </span>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex-1">
            <div className="mb-[8px] font-medium text-[#000000DE]">
              Campaign name <span className="text-[#D32F2F]">*</span>
            </div>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder={'Enter your company name, e.g. "GlowBeauty"'}
            />
          </div>
          <div className="flex-1">
            <div className="mb-[8px] font-medium text-[#000000DE]">
              Product name <span className="text-[#D32F2F]">*</span>
            </div>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder={'Enter your product name, e.g., "Skincare Serum"'}
            />
          </div>
        </div>
        <div>
          <div className="mb-[8px] font-medium text-[#000000DE]">
            Product description <span className="text-[#D32F2F]">*</span>
          </div>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder={
              'Briefly describe your product, e.g., "Hydrating serum with natural ingredients."'
            }
          />
        </div>
        <div>
          <div className="mb-[8px] font-medium text-[#000000DE]">
            Unique Selling Points (USPs)
            <span className="text-[#D32F2F]">*</span>
          </div>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            placeholder={
              'List the key features that make your product stand out, e.g., "Hydrating, natural ingredients, for all skin types."'
            }
          />
        </div>
      </div>
    </div>
  );
}
